using OpenTelemetry;
using OpenTelemetry.Metrics;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

OpenTelemetryBuilder otel = builder.Services.AddOpenTelemetry();

otel.WithMetrics(metrics => metrics
    .AddPrometheusExporter()
    .AddRuntimeInstrumentation()
    .AddProcessInstrumentation()
    .AddAspNetCoreInstrumentation());

builder.Host.UseSerilog((context, configuration) =>
    configuration.ReadFrom.Configuration(context.Configuration));

var app = builder.Build();

app.UseSerilogRequestLogging();

app.MapPrometheusScrapingEndpoint();

app.MapGet("/async-work", async () =>
{
    // Имитируем долгую работу (например, 3 секунды)
    await Task.Delay(3000);

    return Results.Ok("Асинхронная работа завершена");
});

app.Run();