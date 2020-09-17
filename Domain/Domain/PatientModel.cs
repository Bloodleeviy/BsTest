using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class PatientModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "ФИО-обязательное поле")]
        [Display(Name = "ФИО")]
        public string FIO { get; set; }      
        [Required(ErrorMessage = "Отделение-обязательное поле")]
        [Display(Name = "Отделение")]
        public int? Dept_Id { get; set; }
        [Display(Name = "Пол")]
        [Required(ErrorMessage = "Обязательно выберите пол")]
        public int? Sex_Id { get; set; }
        [Required(ErrorMessage = "Отметьте, находится ли пациент на ИВЛ")]
        [Display(Name = "На ивл")]
        public string IVL { get; set; }
    }
}
