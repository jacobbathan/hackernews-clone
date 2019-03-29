using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Models
{
    public class UploadPhotoModel
    {
        public bool Success { get; set; }
        public string FileName { get; set; }
        public string FileUrl { get; set; }
    }
}
