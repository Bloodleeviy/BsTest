using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Domain;
using Microsoft.Extensions.Options;

namespace TestBS.Models
{
    public class BsModelRepository : IBsRepository, IDeptRepository, IGenderRepository, IPatientRepository
    {
        private RepositoryOptions _options;
        public BsModelRepository(IOptions<RepositoryOptions> options)
        {
            _options = options.Value;
        }
        public async Task Update(BsModel model)
        {
            using (IDbConnection db = new SqlConnection(_options.ConnectionString))
            {
                await db.QueryAsync($@"Update Patients set
                    Fio=@{nameof(BsModel.FIO)},
                    Dept_Id=@{nameof(BsModel.Dept_Id)},
                    Sex_Id=@{nameof(BsModel.Sex_Id)},
                    IVL=@{nameof(BsModel.IVL)} 
                    where Id=@{nameof(BsModel.Id)}", 
                    new
                {
                    model.FIO,
                    model.Dept_Id,
                    model.Sex_Id,
                    model.IVL,
                    model.Id
                });
            }
        }        
        public async Task Create(BsModel model)
        {
            using (IDbConnection db = new SqlConnection(_options.ConnectionString))
            {
                await db.QueryAsync(@$"Insert into Patients Values(
                    @{nameof(BsModel.FIO)},
                    @{nameof(BsModel.Dept_Id)},
                    @{nameof(BsModel.Sex_Id)},
                    @{nameof(BsModel.IVL)} 
                    )", 
                    new
                {
                    model.FIO,
                    model.Dept_Id,
                    model.Sex_Id,
                    model.IVL
                });
            }
        }      
        public async Task<List<BsModel>> GetPatients()
        {
            using (IDbConnection db = new SqlConnection(_options.ConnectionString))
            {
                return (await db.QueryAsync<BsModel>(
                    @$"select *
                        FROM Patients 
                        JOIN Depts ON Depts.Id = Dept_Id 
                        JOIN Genders ON Genders.Id = Sex_id"))
                    .ToList();
            }
        }
        public async Task<List<PatientModel>> GetOnlyPatients()
        {
            using (IDbConnection db = new SqlConnection(_options.ConnectionString))
            {
                return (await db.QueryAsync<PatientModel>(
                    @$"select *
                        FROM Patients"))
                    .ToList();
            }
        }
        public async Task<List<DeptModel>> GetDepts()
        {
            using (IDbConnection db = new SqlConnection(_options.ConnectionString))
            {
                return (await db.QueryAsync<DeptModel>("SELECT * from Depts")).ToList();
            }
        }
        public async Task<List<GenderModel>> GetGenders()
        {
            using (IDbConnection db = new SqlConnection(_options.ConnectionString))
            {
                return (await db.QueryAsync<GenderModel>("SELECT * from Genders")).ToList();
            }
        }
    }
}
