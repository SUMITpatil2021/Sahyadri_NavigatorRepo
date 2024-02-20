using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Facility
    {
        public Facility()
        {
            TrekkDetails = new HashSet<TrekkDetail>();
        }

        public int Facilityid { get; set; }
        public string? Firstaid { get; set; }
        public string? Food { get; set; }
        public string? Guidename { get; set; }
        public string? Trainingprogram { get; set; }
        public string? Transportation { get; set; }
        public string? Trekkingpole { get; set; }

        public virtual ICollection<TrekkDetail> TrekkDetails { get; set; }
    }
}
