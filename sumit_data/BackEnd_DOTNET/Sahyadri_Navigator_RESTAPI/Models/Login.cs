using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Login
    {
        public Login()
        {
            Trekkingclubs = new HashSet<Trekkingclub>();
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string? Password { get; set; }
        public string? Username { get; set; }
        public int? Roleid { get; set; }
        public int Status { get; set; }

        public virtual Role? Role { get; set; }
        public virtual ICollection<Trekkingclub> Trekkingclubs { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
