FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["src/AsyncApp.Api/AsyncApp.Api.csproj", "src/AsyncApp.Api/"]
RUN dotnet restore "src/AsyncApp.Api/AsyncApp.Api.csproj"
COPY . .
WORKDIR "/src/src/AsyncApp.Api"
RUN dotnet build "AsyncApp.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AsyncApp.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AsyncApp.Api.dll"]
