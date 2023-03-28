import { useOutletContext } from "react-router-dom";
import { useDataList } from "../../../hooks/useDataList";
import { useAppStore } from "../../../store/slices/appStoreSlice";
import DropDown from "../../dropDown";

function StationSelect() {
  const { dustList } = useOutletContext();
  const {
    data: { selectedStation },
  } = useAppStore();

  return (
    <DropDown
      name="station"
      options={dustList?.map((item) => item.stationName)}
      {...(dustList?.find((item) => item.stationName === selectedStation) && {
        defaultValue: selectedStation,
      })}
    />
  );
}

export default StationSelect;
