import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type PropertyMapProps = {
    latitude: number;
    longitude: number;
}

const PropertyMap = ({ latitude, longitude }: PropertyMapProps) => {
    const position: [number, number] = [latitude, longitude];

    return (
        <MapContainer
            center={position}
            zoom={16}
            style={{ height: "250px", width: "80%", margin: "24px 0" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Localização do imóvel.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default PropertyMap;
