using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public interface IBsRepository
    {
        public Task<List<BsModel>> GetPatients();
        Task Update(BsModel model);
        Task Create(BsModel model);
    }
}