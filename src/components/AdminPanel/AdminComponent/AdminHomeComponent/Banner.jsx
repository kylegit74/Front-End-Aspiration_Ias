import { useEffect, useState } from "react";
import { Image, Plus, Trash2, Edit2, X, Upload } from "lucide-react";
import FetchAllBanner from "../../../../Services/Banner/FetchAllBanner";
import EditBanner from "../../../../Services/Banner/EditBanner";
import DeleteBanner from "../../../../Services/Banner/DeleteBanner";
import AddBanner from "../../../../Services/Banner/AddBanner";

function AdminBanner() {
  const [Banners, SetBanners] = useState([]);
  const [previews, setPreviews] = useState({});
  const [isEdit, setisEdit] = useState();
  const [editIndex, seteditIndex] = useState();
  const [issaving, setisSaving] = useState(false);
  const [file, setFile] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const[Link, setBannerLink]=useState();
  

  async function FetchAdminBanners() {
    try {
      const res = await FetchAllBanner();
      if (Array.isArray(res)) {
        SetBanners(res);
        const initialPreviews = {};
        res.forEach((banner, index) => {
          if (banner.image) {
            initialPreviews[index] = banner.image;
          }
        });
        setPreviews(initialPreviews);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
      SetBanners([]);
    }
  }

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [index]: fileURL }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setFile(file);
    }
  };

  function handleEdit(index) {
    console.log("edited", index);
    setisEdit(true);
    seteditIndex(index);
  }

  async function HanldeEditSubmit(e, id) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    setisSaving(true);
    try {
      const res = await EditBanner(formdata, id);
      FetchAdminBanners();
      setisEdit(false);
      console.log("res");
      setisSaving(false);
    } catch (error) {
      console.log("error", error);
      setisSaving(false);
    }
  }

  async function handleDelete(e, id) {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this banner?")) return;

    try {
      await DeleteBanner(id);
      FetchAdminBanners()
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  }

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setisSaving(true);

    try {
      await AddBanner(formData);
      FetchAdminBanners();
      setIsDialogOpen(false);
      setFile(null);
    } catch (error) {
      console.error("Error uploading banner:", error);
    } finally {
      setisSaving(false);
    }
  };
  function handleDialogClose()
  {
    setIsDialogOpen(false);
    setFile(null);
  }

  useEffect(() => {
    FetchAdminBanners();
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Banner Management</h2>
        <button
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="w-4 h-4" />
          Add Banner
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Banners?.map((banner, index) => (
          <div key={index} className="group">
            <div className="border rounded-lg overflow-hidden bg-gray-50">
            {/* <input type="text" vlaue={banner?.link} onChange={(e)=>setBannerLink(e.target.value)} className="px-2 "/> */}
              <div className="relative aspect-video">
                {previews[index] ? (
                  <img
                    src={previews[index]}
                    alt="Banner Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="w-8 h-8 text-gray-400" />
                  </div>
                )}
             
                <div className="absolute inset-0 bg-black/50 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <label className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, index)}
                      className="hidden"
                      accept="image/*"
                    />
                    <Edit2
                      className="w-5 h-5 text-gray-600"
                      onClick={(e) => handleEdit(index)}
                    />
                  </label>
                  {isEdit && index == editIndex ? (
                    <button
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
                      onClick={(e) => HanldeEditSubmit(e, banner._id)}
                    >
                      {issaving ? "Saving" : "save"}
                    </button>
                  ) : (
                    <button
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300 hover:bg-red-100 hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-red-300"
                      onClick={(e) => handleDelete(e, banner._id)}
                    >
                      <Trash2 className="w-6 h-6 text-red-500" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 relative animate-fadeIn">
            <div className="p-6">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => handleDialogClose(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Add New Banner</h3>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
                  isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="text-center">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop your image here, or</p>
                  <label className="inline-block">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="hidden"
                      accept="image/*"
                    />
                    <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">browse files</span>
                  </label>
                </div>
              </div>

              {file && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                  <Image className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600 truncate">{file.name}</span>
                </div>
              )}

              <div className="mt-6">
                <button
                  onClick={handleUpload}
                  disabled={issaving || !file}
                  className={`w-full py-2.5 rounded-lg text-white font-medium transition-all duration-200 ${
                    issaving || !file
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow-md'
                  }`}
                >
                  {issaving ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Uploading...
                    </span>
                  ) : (
                    'Upload Banner'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminBanner;