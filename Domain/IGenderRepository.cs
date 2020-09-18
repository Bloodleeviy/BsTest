using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public interface IGenderRepository
    {
        public Task<List<GenderModel>> GetGenders();
    }
}
