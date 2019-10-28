using System;
using System.Collections.Generic;

namespace OnboardingProject.Models
{
    public partial class Sales
    {
        public int Saleid { get; set; }
        public int? Cid { get; set; }
        public int? Pid { get; set; }
        public int? Sid { get; set; }
        public DateTime Datesold { get; set; }

        public Customer C { get; set; }
        public Product P { get; set; }
        public Store S { get; set; }
    }
}
