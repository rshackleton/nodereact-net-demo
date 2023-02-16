using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using nodereact_net.Models;

namespace nodereact_net.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("/")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("/no-react")]
    public IActionResult NoReact()
    {
        return View();
    }

    [HttpGet("/server-only")]
    public IActionResult ServerOnly()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
