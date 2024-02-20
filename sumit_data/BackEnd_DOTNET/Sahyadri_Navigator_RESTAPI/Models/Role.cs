using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Role
    {
        public Role()
        {
            Logins = new HashSet<Login>();
        }

        public int Roleid { get; set; }
        public string? Roletype { get; set; }

        public virtual ICollection<Login> Logins { get; set; }
    }
}
