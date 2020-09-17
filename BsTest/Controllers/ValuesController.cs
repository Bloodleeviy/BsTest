using System.Collections.Generic;
//using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Domain;
using Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TestBS.Controllers
{
    public class ValuesController : Controller
    {
        private readonly IDeptRepository _deptRepository;
        private readonly IBsRepository _bsRepository;
        private readonly IGenderRepository _genderRepository;
        private readonly BsModelContext db;
        public ValuesController(IDeptRepository deptRepository,IBsRepository bsRepository,IGenderRepository genderRepository, BsModelContext context)
        {
            _deptRepository = deptRepository;
            _bsRepository = bsRepository;
            _genderRepository = genderRepository;

            db = context;
        }
        public async Task<object> GetPatients(DataSourceLoadOptions loadOptions)
        {
            //return DataSourceLoader.Load((await _bsRepository.GetPatients()).ToList(), loadOptions);            
            return await DataSourceLoader.LoadAsync(db.PatientsView, loadOptions);
        }
        public async Task<List<DeptModel>> GetDepts()
        {
            //return (await _deptRepository.GetDepts()).ToList();

            return await db.Depts.ToListAsync();
        }      
        public async Task<List<DeptModel>> GetDeptsExt()
        {
            //return new List<DeptModel>() { new DeptModel() { Id = -1, Dept = "Все" } }
            //.Union(await _deptRepository.GetDepts()).ToList();
            return new List<DeptModel>() { new DeptModel() { Id = -1, Dept = "Все" } }
            .Union(await db.Depts.ToListAsync()).ToList();
        }
        public async Task<List<GenderModel>> GetGenders()
        {
            //return  (await _genderRepository.GetGenders()).ToList();
            return await db.Genders.ToListAsync();
        }
    }
}
