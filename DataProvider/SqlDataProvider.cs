//using System;
//using System.Data;
//using System.Data.SqlClient;

//namespace sabio_project.DataProvider
//{
//    public sealed class SqlDataProvider : IDataProvider
//    {
//        private readonly string connectionString;

//        public SqlDataProvider(string connectionString)
//        {
//            this.connectionString = connectionString;
//        }

//        public void ExecuteCmd(
//            string storedProcedure,
//            Action<SqlParameterCollection> inputParamMapper,
//            Action<IDataReader, short> singleRecordMapper,
//            Action<SqlParameterCollection> returnParameters = null,
//            Action<SqlCommand> cmdModifier = null)
//        {
//            if (singleRecordMapper == null)
//            {
//                throw new NullReferenceException("Object mapper is required");
//            }

//            SqlDataReader reader = null;
//            SqlCommand command = null;
//            SqlConnection connection = null;
//            short result = 0;

//            try
//            {
//                using (connection = GetConnection())
//                {
//                    if (connection != null)
//                    {
//                        if (connection.State != ConnectionState.Open)
//                        {
//                            connection.Open();

//                        }
//                        command = GetCommand(connection, storedProcedure, inputParamMapper);
//                    }
//                }
//            }
//            finally
//            {
//                if (reader != null && !reader.IsClosed)
//                {
//                    reader.Close();
//                }

//                if (connection != null && connection.State != ConnectionState.Closed)
//                {
//                    connection.Close();
//                }
//            }
//        }

//        public int ExecuteNonQuery(
//            string storedProcedure,
//            Action<SqlParameterCollection> inputParamMapper,
//            Action<SqlParameterCollection>
//            returnParameters = null)
//        {
//            throw new NotImplementedException();
//        }

//        private SqlConnection GetConnection()
//        {
//            return new SqlConnection(connectionString);
//        }

//        private IDbCommand GetCommand(IDbConnection connection, string commandText = null, Action<IDataParameterCollection> paramMapper = null)
//        {
//            IDbCommand command = null;

//            if (connection != null)
//            {
//                command = connection.CreateCommand();
//            }

//            if (command != null)
//            {
//                if (!String.IsNullOrEmpty(commandText))
//                {
//                    command.CommandText = commandText;
//                    command.CommandType = CommandType.StoredProcedure;
//                }
//            }
//            return command;
//        }
//    }
//}