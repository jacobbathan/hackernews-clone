using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Models.WebModels
{
    public class ItemResponse<T> : SuccessResponse, IItemResponse
    {
        public T Item { get; set; }
        object IItemResponse.Item { get { return this.Item; } }

    }
}
