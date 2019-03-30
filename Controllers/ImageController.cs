using Microsoft.AspNetCore.Mvc;
using sabio_project.Models;
using sabio_project.Models.WebModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Services
{
    [Route("api/images")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private ImageService _imageService = new ImageService();

        [HttpGet]
        public ActionResult<Response<List<Image>>> GetAllImages()
        {
            ActionResult result = null;
            List<Image> photoList = null;

            try
            {
                photoList = _imageService.GetAllPhotos();
                if (photoList != null)
                {
                    result = Ok(photoList);
                }
            }
            catch (Exception exception)
            {
                throw exception;
            }
            return result;
        }
    }
}
