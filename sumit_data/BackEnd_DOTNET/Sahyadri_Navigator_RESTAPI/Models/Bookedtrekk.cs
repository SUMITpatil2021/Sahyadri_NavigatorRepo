using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Bookedtrekk
    {
        public int Bookid { get; set; }
        public double? Charges { get; set; }
        public string? City { get; set; }
        public DateTime? Date { get; set; }
        public int? Noofpersons { get; set; }
        public string? Pickuppoint { get; set; }
        public double? Totalcharges { get; set; }
        public string? Trekkingpoint { get; set; }
        public string? Trekkname { get; set; }
        public int? Userid { get; set; }

        public virtual User? User { get; set; }
    }
}
