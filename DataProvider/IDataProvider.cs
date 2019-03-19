using System;
using System.Data;
using System.Data.SqlClient;

namespace sabio_project.DataProvider
{
    public interface IDataProvider
    {
        void ExecuteCmd(
            string storedProcedure,
            Action<SqlParameterCollection> inputParamMapper,
            Action<IDataReader, short> singleRecordMapper,

            Action<SqlParameterCollection> returnParameters = null,
        Action<SqlCommand> cmdModifier = null);

        int ExecuteNonQuery(
            string storedProcedure,
            Action<SqlParameterCollection> inputParamMapper,
            Action<SqlParameterCollection> returnParameters = null);
    }
}