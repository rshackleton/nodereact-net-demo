using NodeReact;

namespace nodereact_net;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // ConfigureServices
        var services = builder.Services;

        services.AddMvc().AddRazorRuntimeCompilation();

        services.AddNodeReact(
            config =>
            {
                config.EnginesCount = 2;
                config.ConfigureOutOfProcessNodeJSService(o =>
                {
                    o.NumRetries = 0;
                    o.InvocationTimeoutMS = 10000;
                });
                config.AddScriptWithoutTransform("~/dist/server.js");
                config.UseDebugReact = true;

                config.ConfigureSystemTextJsonPropsSerializer((_) => { });
            });

        // Configure

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
        }

        app.UseStatusCodePages();

        app.UseHttpsRedirection();

        app.UseStaticFiles();
        app.UseCookiePolicy();

        app.UseRouting();
        app.MapControllers();

        app.Run();
    }
}
