import { useEffect, useState } from "react";
import { Plus, Trash2, MessageSquare, Edit2, Save } from "lucide-react";
import FetchallNotice from "../../../../Services/Notice/FetchAllNotice";
import Dialog from "./AdminDialog";
import AddNotice from "../../../../Services/Notice/AddNotice";
import DeleteNotice from "../../../../Services/Notice/DeleteNotice";
import EditNotice from "../../../../Services/Notice/EditNotice";
import Loading from "../../../Loader";
import Spinner from "../../../Spinner";

function AdminNotice() {
  const [Notices, SetNotices] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [NewTextToAdd, SetNewTextToAdd] = useState();
  const [isEdit, setisEdit] = useState(false);
  const [Values, setValues] = useState({});
  const [EditIndex, setEditIndex] = useState();
  const [IsLoading, setIsLoading]=useState(false)

  async function FetchNotices() {
    try {
      setIsLoading(true)
      const res = await FetchallNotice();
      const sortedNotices = [...res].sort((a, b) => {
        const DateA = new Date(a.updatedAt);
        const DateB = new Date(b.updatedAt);
        
        if (DateA - DateB === 0) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return DateB - DateA;
      });
      setIsLoading(false)
      
      let initial = {};
      sortedNotices.forEach((notice, index) => {
        initial[index] = notice.text;
      });
      
      setValues(initial);
      SetNotices(sortedNotices);
    } catch (error) {
      console.log("Error fetching notices:", error);
      setIsLoading(false)
    }
  }
  
  async function handleAdd() {
    try {
      await AddNotice(NewTextToAdd);
      FetchNotices();
      SetNewTextToAdd();
      setIsAddDialogOpen(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      await DeleteNotice(id);
      FetchNotices();
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleValueChange(e, index) {
    setisEdit(true);
    setValues((prev) => ({
      ...prev,
      [index]: e.target.value,
    }));
    setEditIndex(index);
  }

  async function handleSave(id, index) {
    try {
      await EditNotice(id, Values[index]);
      FetchNotices();
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    FetchNotices();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-9xl mx-auto bg-white p-8 rounded-2xl border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Notice Management</h2>
            <p className="text-gray-600 mt-2">Manage and publish important notices</p>
          </div>
          <button
            onClick={() => setIsAddDialogOpen(true)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Plus className="w-5 h-5" />
            Add Notice
          </button>
        </div>
{IsLoading? <Spinner/>:   <div className="space-y-4">
          {Notices?.map((notice, index) => (
            <div
              key={index}
              className="group relative flex flex-col sm:flex-row items-start gap-4 p-6 border rounded-xl hover:border-indigo-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center hidden sm:flex">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1 w-full sm:w-auto">
                <input
                  type="text"
                  value={Values[index]}
                  onChange={(e) => handleValueChange(e, index)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all duration-200"
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  className="p-2 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {isEdit && index === EditIndex && Values[index] !== notice.text ? (
                    <Save 
                      className="w-5 h-5 text-green-600" 
                      onClick={() => handleSave(notice._id, index)} 
                    />
                  ) : (
                    <Edit2 className="w-5 h-5 text-indigo-600" />
                  )}
                </button>
                <button
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  onClick={() => handleDelete(notice._id)}
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>}
      
      </div>

      <Dialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        title="Add New Notice"
      >
        <div className="space-y-6">
          <textarea
            placeholder="Enter notice text..."
            value={NewTextToAdd}
            onChange={(e) => SetNewTextToAdd(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all duration-200 resize-none"
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsAddDialogOpen(false)}
              className="px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-md hover: shadow-lg transform hover:-translate-y-0.5"
              onClick={() => handleAdd()}
            >
              Add Notice
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default AdminNotice;