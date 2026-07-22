function FloatingBlur() {
  return (
    <>
      <div
        className="
        absolute
        -top-32
        -left-32
        w-72
        h-72
        rounded-full
        bg-blue-400/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        rounded-full
        bg-cyan-400/20
        blur-[150px]
      "
      />
    </>
  );
}

export default FloatingBlur;