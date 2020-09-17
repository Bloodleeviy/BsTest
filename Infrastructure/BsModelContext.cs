using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class BsModelContext : DbContext
    {
        public DbSet<BsModel> PatientsView { get; set; }
        public DbSet<PatientModel> Patients { get; set; }
        public DbSet<GenderModel> Genders { get; set; }
        public DbSet<DeptModel> Depts { get; set; }

        public BsModelContext(DbContextOptions<BsModelContext> options)
            : base(options)
        {
            
        }
    }
}
