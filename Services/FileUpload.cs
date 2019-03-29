using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Http;
using sabio_project.Models;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Threading.Tasks;

namespace sabio_project.Services
{
    public class FileUpload
    {
        private static String accessKey = "AKIAI3ORPSEEBF43HCBQ";
        private static String accessSecret = "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";
        private static String bucket = "jacobfileuploader";
        private readonly string connectionString = "Server=.\\SQLEXPRESS;Database=C68Personal;Trusted_Connection=True;";

        public async Task<UploadPhotoModel> UploadObject(IFormFile file)
        {
            var client = new AmazonS3Client(accessKey, accessSecret, Amazon.RegionEndpoint.USWest1);

            byte[] fileBytes = new Byte[file.Length];
            file.OpenReadStream().Read(fileBytes, 0, Int32.Parse(file.Length.ToString()));

            var fileName = Guid.NewGuid() + file.FileName;

            PutObjectResponse response = null;

            using (var stream = new MemoryStream(fileBytes))
            {
                var request = new PutObjectRequest
                {
                    BucketName = bucket,
                    Key = fileName,
                    InputStream = stream,
                    ContentType = file.ContentType,
                    CannedACL = S3CannedACL.PublicRead
                };

                response = await client.PutObjectAsync(request);
            };

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
            {
                return new UploadPhotoModel
                {
                    Success = true,
                    FileName = fileName,
                    FileUrl = "https://s3-us-west-1.amazonaws.com/jacobfileuploader/" + fileName
                };
            }
            else
            {
                return new UploadPhotoModel
                {
                    Success = false,
                    FileName = fileName
                };
            }
        }

        public int InsertImage(string imageUrl)
        {
            int id = 0;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.Images_Insert", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();

                    command.Parameters.Add(new SqlParameter("@ImageUrl", imageUrl));

                    SqlParameter outputParameter = new SqlParameter();
                    outputParameter.ParameterName = "@Id";
                    outputParameter.SqlDbType = SqlDbType.Int;
                    outputParameter.Direction = ParameterDirection.Output;
                    command.Parameters.Add(outputParameter);

                    command.ExecuteNonQuery();
                    connection.Close();

                    id = (int)outputParameter.Value;

                    return id;
                }
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
    }
}