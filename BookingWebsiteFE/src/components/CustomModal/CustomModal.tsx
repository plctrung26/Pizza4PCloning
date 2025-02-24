import { Button, Divider, Input, Modal, ModalProps, Radio, RadioChangeEvent, Tabs } from "antd";
import { DownOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import './CustomModal.scss';
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useEffect } from "react";

const defaultLocation: LatLngExpression = [10.7769, 106.7009];

const CustomModal: React.FC<ModalProps> = (props) => {
    const [activeTab, setActiveTab] = useState("left");
    const [location, setLocation] = useState<LatLngExpression>(defaultLocation);
    const [address, setAddress] = useState<string>("");
    const [nearestShop, setNearestShop] = useState<string>("option1");

    const onChange = (e: RadioChangeEvent) => {
        setNearestShop(e.target.value);
        console.log(nearestShop)
    };

    const ResizeMap = () => {
        const map = useMap();
        useEffect(() => {
            setTimeout(() => {
                map.invalidateSize();
            }, 300); // Delay to ensure modal animation finishes
        }, [map]);
        return null;
    };

    const customMarker = new L.Icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    function MapClickHandler() {
        useMapEvents({
            click(e) {
                setLocation(e.latlng);
            },
        });
        return null;
    }

    const MapUpdater = ({ position }: { position: LatLngExpression }) => {
        const map = useMap();
        map.flyTo(position, 13, { animate: true });
        return null;
    };

    useEffect(() => {
        if (props.open) {
            document.body.classList.add("modal-blur");
        } else {
            document.body.classList.remove("modal-blur");
        }

        return () => {
            document.body.classList.remove("modal-blur");
        };
    }, [props.open]);

    const fetchAddress = async (latlng: LatLngExpression) => {

        const lat = Array.isArray(latlng) ? latlng[0] : latlng.lat;
        const lng = Array.isArray(latlng) ? latlng[1] : latlng.lng;
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.address) {
                const addressStr = `${data.address.road}, ${data.address.city}, ${data.address.country}`;
                setAddress(addressStr);
            } else {
                setAddress("Address not found");
            }
        } catch (error) {
            console.error("Error fetching address:", error);
            setAddress("Failed to get address");
        }
    };

    const tabsItems = [
        {
            key: "left",
            label: "Delivery",
            children: (
                <div className="contentSpace">
                    <Input
                        placeholder="Enter your delivery address"
                        className="addressInput"
                        suffix={<DownOutlined />}
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <Divider
                        style={{
                            borderColor: '#AAACA6',
                            color: '#4C2E52'
                        }}
                    >
                        or
                    </Divider>
                    <div className="buttonGroup">
                        <Button
                            icon={<SendOutlined />}
                            onClick={() => {
                                navigator.geolocation.getCurrentPosition((pos) => {
                                    const { latitude, longitude } = pos.coords;
                                    setLocation({ lat: latitude, lng: longitude });
                                    fetchAddress({ lat: latitude, lng: longitude });
                                    console.log(address)
                                });
                            }}
                            className="getLocationButton"
                        >
                            Use Current Location
                        </Button>
                        <Button icon={<EnvironmentOutlined />}
                            className="chooseLocationButton"
                            onClick={() => {
                                fetchAddress(location);
                            }}
                        >
                            Select on map
                        </Button>
                    </div>
                    <div className="map-container">
                        <MapContainer
                            center={location}
                            zoom={13}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <ResizeMap />
                            <MapClickHandler />
                            <Marker position={location} icon={customMarker} />
                            <MapUpdater position={location} />
                        </MapContainer>
                    </div>
                </div>
            ),
        },
        {
            key: "right",
            label: "Pickup",
            children: (
                <div className="contentSpace">
                    <Input
                        placeholder="Enter your delivery address"
                        className="addressInput"
                        suffix={<DownOutlined />}
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <Divider
                        style={{
                            borderColor: '#AAACA6',
                            color: '#4C2E52'
                        }}
                    >
                        or
                    </Divider>
                    <div className="buttonGroup">
                        <Button
                            icon={<SendOutlined />}
                            onClick={() => {
                                console.log("Hellloo")
                            }}
                            className="getLocationButton"
                            style={{
                                width: "100%"
                            }}
                        >
                            Find the nearest Pizza 4P's
                        </Button>
                    </div>
                    <div className="radio-wrapper">
                        <Radio.Group
                            onChange={onChange}
                            defaultValue="option1"
                            className="custom-radio-group"
                        >
                            <Radio value="option1" className="custom-radio">
                                <div>
                                    Taisei
                                </div>
                                <div>
                                    Estimated pickup time: 10:25 AM (Today)
                                </div>
                            </Radio>
                            <Radio value="option2" className="custom-radio">Option 2</Radio>
                            <Radio value="option3" className="custom-radio">Option 3</Radio>
                            <Radio value="option4" className="custom-radio">Option 1</Radio>
                            <Radio value="option5" className="custom-radio">Option 2</Radio>
                            <Radio value="option6" className="custom-radio">Option 3</Radio>
                            <Radio value="option7" className="custom-radio">Option 1</Radio>
                            <Radio value="option8" className="custom-radio">Option 2</Radio>
                            <Radio value="option9" className="custom-radio">Option 3</Radio>
                        </Radio.Group>
                    </div>
                </div>
            )
        },
    ];

    return (
        <Modal {...props}
            title={null}
            className="bookingModal"
            width="45vw"
            closable={false}
            open={props.open}
            footer={null}
            centered={false}
            getContainer={false}
        >
            <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                className="custom-tabs"
                items={tabsItems} // Use `items` instead of `TabPane`
            />
            <div className="custom-footer">
                <Button
                    type="default"
                    onClick={props.onCancel}
                    className="footerButton"
                    style={{
                        backgroundColor: "#242E52",
                        color: "white"
                    }}
                >
                    Continue as guest
                </Button>
                <div style={{ color: 'white' }}>or</div>
                <Button
                    type="primary"
                    onClick={() => console.log("Confirmed!")}
                    className="footerButton"
                    style={{
                        color: '#242E52',
                        backgroundColor: 'white'
                    }}
                >
                    Login
                </Button>
            </div>
        </Modal>
    );
}

export default CustomModal;
