using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class TrekkDetail
    {
        public int Trekkid { get; set; }
        public double? Charges { get; set; }
        public DateTime? Date { get; set; }
        public string? Trekkname { get; set; }
        public int? Facilityid { get; set; }
        public int? Locationid { get; set; }
        public int? Imgid { get; set; }
        public int? Clubid { get; set; }
        public int? Userid { get; set; }

        public virtual Trekkingclub? Club { get; set; }
        public virtual Facility? Facility { get; set; }
        public virtual Image? Img { get; set; }
        public virtual Trekklocation? Location { get; set; }
        public virtual Trekkingclub? User { get; set; }
    }
}
