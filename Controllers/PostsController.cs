﻿using Microsoft.AspNetCore.Mvc;
using sabio_project.Models;
using sabio_project.Models.WebModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace sabio_project.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly string connectionString = "Server=.\\SQLEXPRESS;Database=C68Personal;Trusted_Connection=True;";

        [HttpGet]
        public ActionResult<Response<List<Post>>> GetAllPosts()
        {
            Response<List<Post>> response = null;
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
                if (postList != null)
                {
                    response = new Response<List<Post>>(postList);
                    return Ok(response);
                }
                return BadRequest("Bad request has been made");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult<ItemResponse<Post>> GetById(int id)
        {

            ActionResult result = null;
            Post post = new Post();


            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.Posts_GetById", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();

                    command.Parameters.Add(new SqlParameter("@Id", id));
                    SqlDataReader reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        post.Id = Convert.ToInt32(reader["Id"]);
                        post.Title = reader["Title"].ToString();
                        post.Body = reader["Body"].ToString();
                        post.Url = reader["Url"].ToString();
                        post.Score = Convert.ToInt32(reader["Score"]);
                        post.DateCreated = Convert.ToDateTime(reader["DateCreated"]);
                        post.DateEdited = reader["DateEdited"] == DBNull.Value ? (DateTime?)null : (DateTime)reader["DateEdited"];
                        post.CreatedBy = reader["CreatedBy"].ToString();

                        if (post == null)
                        {
                            post = new Post();
                        }

                    }

                    connection.Close();
                }
                if (post != null)
                {
                    result = Ok(post);
                    return result;
                }
                return BadRequest("Post does not exist");
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        [HttpPost]
        public ActionResult<ItemResponse<int>> InsertPost(Post model)
        {
            ActionResult result = null;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.Posts_Insert", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();

                    command.Parameters.Add(new SqlParameter("@Title", model.Title));
                    command.Parameters.Add(new SqlParameter("@Body", model.Body));
                    command.Parameters.Add(new SqlParameter("@Url", model.Url));
                    command.Parameters.Add(new SqlParameter("@Score", model.Score));
                    command.Parameters.Add(new SqlParameter("@CreatedBy", model.CreatedBy));

                    SqlParameter outputParameter = new SqlParameter();
                    outputParameter.ParameterName = "@Id";
                    outputParameter.SqlDbType = SqlDbType.Int;
                    outputParameter.Direction = ParameterDirection.Output;
                    command.Parameters.Add(outputParameter);

                    command.ExecuteNonQuery();
                    connection.Close();

                    ItemResponse<int> response = new ItemResponse<int>();
                    response.Item =(int)outputParameter.Value;
                    result = Ok(response);
                    return result;
                }
            }
            catch (Exception exception)
            {
                
                throw exception;
            }
        }

        [HttpPut("{id:int}")]
        public ActionResult<SuccessResponse> Put(Post model, int id)
        {
            ActionResult result = null;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.Posts_Update", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();

                    command.Parameters.Add(new SqlParameter("@Id", id));
                    command.Parameters.Add(new SqlParameter("@Title", model.Title));
                    command.Parameters.Add(new SqlParameter("@Body", model.Body));
                    command.Parameters.Add(new SqlParameter("@Url", model.Url));
                    command.Parameters.Add(new SqlParameter("@Score", model.Score));

                    command.ExecuteNonQuery();
                    connection.Close();

                    SuccessResponse response = new SuccessResponse();
                    result = Ok(response);
                    return result;
                }
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        [HttpDelete("{id:int}")]
        public ActionResult<SuccessResponse> Delete(int id)
        {
            ActionResult result = null;
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("dbo.Posts_Delete", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();

                    command.Parameters.Add(new SqlParameter("@Id", id));

                    command.ExecuteNonQuery();
                    connection.Close();

                    SuccessResponse response = new SuccessResponse();
                    result = Ok(response);
                    return result;

                }
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }


        [HttpGet("ping")]
        public ActionResult<string> Ping()
        {
            return Ok("Ping test");
        }
    }
}