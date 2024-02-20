using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Payment
    {
        public int Paymentid { get; set; }
        public int? Noofpersons { get; set; }
        public DateTime? Paymentdate { get; set; }
        public ulong? Paymentstatus { get; set; }
        public double? Totalcharges { get; set; }
        public string? Trekkername { get; set; }
    }
}
