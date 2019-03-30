using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
