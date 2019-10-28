using System;
using System.Collections.Generic;

namespace OnboardingProject.Models
{
    public partial class Store
    {
        public Store()
        {
            Sales = new HashSet<Sales>();
        }

        public int Sid { get; set; }
        public string Sname { get; set; }
        public string Saddress { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
