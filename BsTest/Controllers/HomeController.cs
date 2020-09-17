using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestBS.Models;
using Domain;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
//using System.Data.Entity;

namespace TestBS.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IBsRepository _bsRepository;
        private readonly BsModelContext db;
        public HomeController(ILogger<HomeController> logger,IBsRepository bsRepository,BsModelContext context)
        {
            _logger = logger;
            _bsRepository = bsRepository;

            db = context;
        }
        //public async Task<IActionResult> Index()
        //{
        //    return View((await _bsRepository.GetPatients()).ToList());
        //}
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Edit(int id)
        {
            //return View((await _bsRepository.GetPatients()).FirstOrDefault(x => x.Id == id));

            return View(await db.Patients.FirstOrDefaultAsync(x => x.Id == id));
        }
        [HttpPost]
        public async Task<IActionResult> Edit(PatientModel model)
        {           
            if (ModelState.IsValid)
            {
                //_bsRepository.Update(model);

                db.Update(model);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            else return View(model);
        }
        public IActionResult Create()
        {
            return View();
        }       
        [HttpPost]
        public async Task<IActionResult> Create(PatientModel model)
        {
            if (ModelState.IsValid)
            {
                //_bsRepository.Create(model);

                db.Add(model);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            else return View(model);           
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
