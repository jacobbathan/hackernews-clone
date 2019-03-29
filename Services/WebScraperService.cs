using sabio_project.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace sabio_project.Services
{
    public class WebScraperService
    {
        private readonly string connectionString = "Server=.\\SQLEXPRESS;Database=C68Personal;Trusted_Connection=True;";

        public int InsertWebScrape(WebScrapedPost model)
        {
            int id = 0;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.ScrapedNews_Insert", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();

                    command.Parameters.Add(new SqlParameter("@Title", model.Title));
                    command.Parameters.Add(new SqlParameter("@Url", model.Url));
                    command.Parameters.Add(new SqlParameter("@CreatedBy", model.CreatedBy));

                    SqlParameter outputParamter = new SqlParameter();
                    outputParamter.ParameterName = "@Id";
                    outputParamter.SqlDbType = SqlDbType.Int;
                    outputParamter.Direction = ParameterDirection.Output;
                    command.Parameters.Add(outputParamter);

                    command.ExecuteNonQuery();
                    connection.Close();

                    id = (int)outputParamter.Value;

                }
            }
            catch (Exception exception)
            {
                throw exception;
            }

            return id;
        }

        public List<WebScrapedPost> GetAll()
        {
            List<WebScrapedPost> postList = null;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.ScrapedNews_GetAll", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        WebScrapedPost post = new WebScrapedPost();

                        post.Id = Convert.ToInt32(reader["Id"]);
                        post.Title = reader["Title"].ToString();
                        post.Url = reader["Url"].ToString();
                        post.DateCreated = Convert.ToDateTime(reader["DateCreated"]);
                        post.CreatedBy = reader["CreatedBy"].ToString();

                        if (postList == null)
                        {
                            postList = new List<WebScrapedPost>();
                        }
                        postList.Add(post);

                    }
                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return postList;
        }
    }
}
