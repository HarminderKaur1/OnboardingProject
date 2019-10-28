using System;
using System.Collections.Generic;

namespace OnboardingProject.Models
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sales>();
        }

        public int Pid { get; set; }
        public string Pname { get; set; }
        public double Pprice { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
