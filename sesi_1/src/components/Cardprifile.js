import acsent from "../assets/logo.png";
import "../css/style.css";
import logo from "../assets/logo.png"
const Cardprofile = () => {
  return (
    // 1. Inline Css

    <div
      style={{
        backgroundColor: "aqua",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(" + { acsent } + ")",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 2. Css File */}
      <div className="card">
        <img src={logo} width="100px" />
        <div align="center">
          <h1>BIODATA</h1>
        </div>
        <div align="center">
          <h2>HAMDANI ARIFILLAH</h2>
        </div>
        <div>
          Saya seorang siswa SMKN 6 Jember,Jurusan Rekayasa Perangkat Lunak.
        </div>
        <div>Alamat : Klatakan</div>
        <div>Kec. : Tanggul</div>
        <div>Kab. : Jember</div>
        <div>No_hp  :086343464656</div>
      </div>
    </div>
  );
};

export default Cardprofile;
