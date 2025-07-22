FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["src/SyncApp.Api/SyncApp.Api.csproj", "src/SyncApp.Api/"]
RUN dotnet restore "src/SyncApp.Api/SyncApp.Api.csproj"
COPY . .
WORKDIR "/src/src/SyncApp.Api"
RUN dotnet build "SyncApp.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SyncApp.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SyncApp.Api.dll"]
