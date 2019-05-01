using sabio_project.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace sabio_project.Services
{
    public class PostsService
    {
        private string connectionString = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";

        public List<Post> GetAllPosts()
        {
            List<Post> postList = null;
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.Posts_GetAll", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        Post post = new Post();

                        post.Id = Convert.ToInt32(reader["Id"]);
                        post.Title = reader["Title"].ToString();
                        post.Body = reader["Body"].ToString();
                        post.Url = reader["Url"].ToString();
                        post.Score = Convert.ToInt32(reader["Score"]);
                        post.DateCreated = Convert.ToDateTime(reader["DateCreated"]);
                        post.DateEdited = reader["DateEdited"] == DBNull.Value ? (DateTime?)null : (DateTime)reader["DateEdited"];
                        post.CreatedBy = reader["CreatedBy"].ToString();

                        if (postList == null)
                        {
                            postList = new List<Post>();
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
