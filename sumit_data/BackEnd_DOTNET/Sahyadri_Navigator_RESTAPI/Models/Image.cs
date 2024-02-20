using System;
using System.Collections.Generic;

namespace Sahyadri_Navigator_RESTAPI.Models
{
    public partial class Image
    {
        public Image()
        {
            TrekkDetails = new HashSet<TrekkDetail>();
        }

        public int Imgid { get; set; }
        public byte[]? Image1 { get; set; }

        public virtual ICollection<TrekkDetail> TrekkDetails { get; set; }
    }
}
