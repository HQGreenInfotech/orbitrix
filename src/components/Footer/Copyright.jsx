function Copyright() {
  return (
    <div
      className="
      border-t
      border-slate-700
      mt-16
      pt-8
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-5
    "
    >
      <p className="text-slate-400 text-center">
        © {new Date().getFullYear()} Orbitix Technology.
        All Rights Reserved.
      </p>

      <div className="flex gap-6">
        <a href="#">Privacy Policy</a>

        <a href="#">Terms & Conditions</a>

        <a href="#">Refund Policy</a>
      </div>
    </div>
  );
}

export default Copyright;