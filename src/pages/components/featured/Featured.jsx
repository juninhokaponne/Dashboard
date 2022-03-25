import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Rendimento total</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total de vendas realizadas hoje</p>
        <p className="amount">R$1.320,59</p>
        <p className="desc">
          Processamento de transações anteriores. Os últimos pagamentos não podem ser incluídos.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Meta</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">R$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Semana passada</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">R$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Mês Passado</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">R$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};