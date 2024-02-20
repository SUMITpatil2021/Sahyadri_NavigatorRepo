using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Trekklocation
    {
        public Trekklocation()
        {
            TrekkDetails = new HashSet<TrekkDetail>();
        }

        public int Locationid { get; set; }
        public string? City { get; set; }
        public string? Landmark { get; set; }
        public string? Trekkingpoint { get; set; }

        public virtual ICollection<TrekkDetail> TrekkDetails { get; set; }
    }
}
