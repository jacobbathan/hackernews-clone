using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Models.WebModels
{
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {
            this.IsSuccessful = true;
        }
    }
}
