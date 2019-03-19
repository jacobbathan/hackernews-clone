using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Models.WebModels
{
    public class Response<T>
    {
        public T DataResponse { get; set; }
        
        public Response(T response)
        {
            DataResponse = response;
        }
    } 
}
