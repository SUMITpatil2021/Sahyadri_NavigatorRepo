using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Trekkingclub
    {
        public Trekkingclub()
        {
            TrekkDetailClubs = new HashSet<TrekkDetail>();
            TrekkDetailUsers = new HashSet<TrekkDetail>();
        }

        public int Clubid { get; set; }
        public string? Contact { get; set; }
        public DateTime? Edate { get; set; }
        public string? Emailid { get; set; }
        public int? Licenseno { get; set; }
        public string? Name { get; set; }
        public string? Ownername { get; set; }
        public string? Password { get; set; }
        public string? Username { get; set; }
        public int? Loginid { get; set; }

        public virtual Login? Login { get; set; }
        public virtual ICollection<TrekkDetail> TrekkDetailClubs { get; set; }
        public virtual ICollection<TrekkDetail> TrekkDetailUsers { get; set; }
    }
}
