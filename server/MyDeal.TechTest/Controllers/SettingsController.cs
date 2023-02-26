using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MyDeal.TechTest.Models;
using MyDeal.TechTest.Services;
using MyDeal.TechTest.Settings;

namespace MyDeal.TechTest.Controllers
{
    [ApiController]
    [Route("Settings")]
    public class SettingsController : Controller
    {
        private readonly AppSettings _appSettings;
        public SettingsController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        public ActionResult Index()
        {
            SettingsVm setting = new SettingsVm
            {
                User = UserService.GetUserDetails("2")?.Data,
                Message = _appSettings.Message,
            };

            return Json(setting);
        }
    }
}