import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();

  const { registerUser } = useContext(Auth);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const role = watch("role");

  const submitHandler = (data) => {
    const res = registerUser(data);
    if (!res.success) {
      toast.error("User Already Exist");
      return;
    }
    toast.success("Registration Successfully");
    reset();
    navigate("/");
  };

  return (
    <div className="h-full overflow-hidden bg-[#171717] text-white">
      <div className="relative flex h-full items-center justify-center px-4 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,68,255,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(122,68,255,0.12),transparent_26%)]" />

        <div className="relative w-full h-full rounded-[2.5rem] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:px-10 sm:py-10">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <h1 className="text-6xl font-semibold tracking-tight text-[#cdb7ff] ">
              MusicHub
            </h1>
            <p className="mt-1 text-sm text-[#e1d6ff]/85">
              Join the sound revolution.
            </p>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="mt-8 w-full h-[80%] rounded-2xl bg-[#201c25]/95 px-4 py-9 shadow-[0_18px_45px_rgba(0,0,0,0.28)] ring-1 ring-white/5 sm:px-5 sm:py-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setValue("role", "listener")}
                  className={`cursor-pointer rounded-xl border px-4 py-5 text-center transition-all duration-200 active:scale-95
      ${
        role === "listener"
          ? "border-purple-500 bg-purple-500/15 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          : "border-white/10 bg-[#19171b] hover:border-purple-400/50 hover:bg-[#25212b]"
      }`}
                >
                  <div className="text-3xl text-purple-300">♪</div>
                  <div className="mt-2 text-xs font-semibold tracking-[0.25em] text-gray-200">
                    LISTENER
                  </div>
                </div>

                <div
                  onClick={() => setValue("role", "artist")}
                  className={`cursor-pointer rounded-xl border px-4 py-5 text-center transition-all duration-200 active:scale-95
      ${
        role === "artist"
          ? "border-purple-500 bg-purple-500/15 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          : "border-white/10 bg-[#19171b] hover:border-purple-400/50 hover:bg-[#25212b]"
      }`}
                >
                  <div className="text-3xl text-purple-300">⌇</div>
                  <div className="mt-2 text-xs font-semibold tracking-[0.25em] text-gray-200">
                    ARTIST
                  </div>
                </div>
              </div>

              <input type="hidden" {...register("role")} />

              <div className="mt-4 space-y-3 text-left">
                {/* Full Name */}
                <div>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                    <span className="text-xl text-[#b7aec4]">◔</span>
                    <input
                      {...register("fullName", {
                        required: "Full name is required",
                        pattern: {
                          value: /^[a-zA-Z ]{3,50}$/,
                          message: "Enter a valid full name (3-50 characters)",
                        },
                      })}
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 ml-4 text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Username */}
                <div>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                    <span className="text-xl text-[#b7aec4]">@</span>
                    <input
                      {...register("username", {
                        required: "Username is required",
                        pattern: {
                          value: /^[a-zA-Z0-9_]{3,20}$/,
                          message: "Username must be 3-20 characters",
                        },
                      })}
                      type="text"
                      placeholder="Username"
                      className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-1 ml-4 text-xs text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                    <span className="text-xl text-[#b7aec4]">✉</span>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 ml-4 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                    <span className="text-xl text-[#b7aec4]">⌂</span>
                    <input
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                          message:
                            "Use 8+ characters with uppercase, lowercase, number and special character",
                        },
                      })}
                      type="password"
                      placeholder="Password"
                      className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 ml-4 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#d8b8ff_0%,#7d3ff2_100%)] px-5 py-3 text-sm font-semibold text-[#2a1343] shadow-[0_12px_30px_rgba(125,63,242,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Register <span className="text-xl">→</span>
              </button>

              <p className="mt-4 text-center text-sm text-[#c3bbce]">
                Already have an account?{" "}
                <span
                  className="font-semibold text-[#d8c8ff]"
                  onClick={() => navigate("/")}
                >
                  Login
                </span>
              </p>
            </form>

            <div className="mt-14 flex items-center gap-6 text-[#47424f]">
              <span className="text-2xl">◫</span>
              <span className="text-2xl">⌂</span>
              <span className="text-2xl">▤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
