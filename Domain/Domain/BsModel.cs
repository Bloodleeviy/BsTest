using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace Domain
{
    public class BsModel
    {
        public int Id { get; set; }
        [Display(Name ="ФИО")]
        public string FIO { get; set; }
        [Display(Name = "Отделение")]
        public string Dept { get; set; }
        public int? Dept_Id { get; set; }
        [Display(Name = "Пол")]
        public string Sex { get; set; }
        public int? Sex_Id { get; set; }
        [Display(Name = "На ивл")]
        public string IVL { get; set; }    
    }
}
