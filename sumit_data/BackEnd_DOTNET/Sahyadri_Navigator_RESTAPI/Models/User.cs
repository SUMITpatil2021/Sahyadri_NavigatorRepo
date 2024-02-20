using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class User
    {
        public User()
        {
            Bookedtrekks = new HashSet<Bookedtrekk>();
        }

        public int Userid { get; set; }
        public string? Contact { get; set; }
        public string? Emailid { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }
        public string? Username { get; set; }
        public int? Loginid { get; set; }

        public virtual Login? Login { get; set; }
        public virtual ICollection<Bookedtrekk> Bookedtrekks { get; set; }
    }
}
