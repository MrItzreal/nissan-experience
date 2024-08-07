toc.dat                                                                                             0000600 0004000 0002000 00000030443 14646237362 0014460 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   !                    |           nissan_experience    16.3    16.3 (    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    16843    nissan_experience    DATABASE     �   CREATE DATABASE nissan_experience WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 !   DROP DATABASE nissan_experience;
                postgres    false                     2615    16844    cars_details    SCHEMA        CREATE SCHEMA cars_details;
    DROP SCHEMA cars_details;
                postgres    false         �            1259    16845    features    TABLE     �   CREATE TABLE cars_details.features (
    feat1 text NOT NULL,
    feat2 text NOT NULL,
    feat3 text NOT NULL,
    feat4 text NOT NULL,
    feat5 text NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);
 "   DROP TABLE cars_details.features;
       cars_details         heap    postgres    false    6         �            1259    16892    features_id_seq    SEQUENCE     �   CREATE SEQUENCE cars_details.features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE cars_details.features_id_seq;
       cars_details          postgres    false    6    216         �           0    0    features_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE cars_details.features_id_seq OWNED BY cars_details.features.id;
          cars_details          postgres    false    221         �            1259    16850    images    TABLE     �  CREATE TABLE cars_details.images (
    thumbnail character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    profilephoto character varying(255) NOT NULL,
    smallphoto character varying(255) NOT NULL,
    mediumphoto character varying(255) NOT NULL,
    bannerphoto character varying(255) NOT NULL,
    xlargephoto character varying(255) NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);
     DROP TABLE cars_details.images;
       cars_details         heap    postgres    false    6         �            1259    16912    images_id_seq    SEQUENCE     �   CREATE SEQUENCE cars_details.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE cars_details.images_id_seq;
       cars_details          postgres    false    217    6         �           0    0    images_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE cars_details.images_id_seq OWNED BY cars_details.images.id;
          cars_details          postgres    false    223         �            1259    16855    performance    TABLE       CREATE TABLE cars_details.performance (
    value1 text NOT NULL,
    detail1 text NOT NULL,
    value2 text NOT NULL,
    detail2 text NOT NULL,
    value3 text NOT NULL,
    detail3 text NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);
 %   DROP TABLE cars_details.performance;
       cars_details         heap    postgres    false    6         �            1259    16922    performance_id_seq    SEQUENCE     �   CREATE SEQUENCE cars_details.performance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE cars_details.performance_id_seq;
       cars_details          postgres    false    6    218         �           0    0    performance_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE cars_details.performance_id_seq OWNED BY cars_details.performance.id;
          cars_details          postgres    false    224         �            1259    16860    specifications    TABLE     �   CREATE TABLE cars_details.specifications (
    spec1 text NOT NULL,
    spec2 text NOT NULL,
    spec3 text NOT NULL,
    spec4 text NOT NULL,
    spec5 text NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);
 (   DROP TABLE cars_details.specifications;
       cars_details         heap    postgres    false    6         �            1259    16902    specifications_id_seq    SEQUENCE     �   CREATE SEQUENCE cars_details.specifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE cars_details.specifications_id_seq;
       cars_details          postgres    false    219    6         �           0    0    specifications_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE cars_details.specifications_id_seq OWNED BY cars_details.specifications.id;
          cars_details          postgres    false    222         �            1259    16865    vehicles    TABLE       CREATE TABLE cars_details.vehicles (
    car_id character varying(20) NOT NULL,
    category character varying(20) NOT NULL,
    model character varying(20) NOT NULL,
    alt character varying(20) NOT NULL,
    price text NOT NULL,
    overview text NOT NULL
);
 "   DROP TABLE cars_details.vehicles;
       cars_details         heap    postgres    false    6         .           2604    16893    features id    DEFAULT     v   ALTER TABLE ONLY cars_details.features ALTER COLUMN id SET DEFAULT nextval('cars_details.features_id_seq'::regclass);
 @   ALTER TABLE cars_details.features ALTER COLUMN id DROP DEFAULT;
       cars_details          postgres    false    221    216         /           2604    16913 	   images id    DEFAULT     r   ALTER TABLE ONLY cars_details.images ALTER COLUMN id SET DEFAULT nextval('cars_details.images_id_seq'::regclass);
 >   ALTER TABLE cars_details.images ALTER COLUMN id DROP DEFAULT;
       cars_details          postgres    false    223    217         0           2604    16923    performance id    DEFAULT     |   ALTER TABLE ONLY cars_details.performance ALTER COLUMN id SET DEFAULT nextval('cars_details.performance_id_seq'::regclass);
 C   ALTER TABLE cars_details.performance ALTER COLUMN id DROP DEFAULT;
       cars_details          postgres    false    224    218         1           2604    16903    specifications id    DEFAULT     �   ALTER TABLE ONLY cars_details.specifications ALTER COLUMN id SET DEFAULT nextval('cars_details.specifications_id_seq'::regclass);
 F   ALTER TABLE cars_details.specifications ALTER COLUMN id DROP DEFAULT;
       cars_details          postgres    false    222    219         �          0    16845    features 
   TABLE DATA           W   COPY cars_details.features (feat1, feat2, feat3, feat4, feat5, car_id, id) FROM stdin;
    cars_details          postgres    false    216       4815.dat �          0    16850    images 
   TABLE DATA           �   COPY cars_details.images (thumbnail, image, profilephoto, smallphoto, mediumphoto, bannerphoto, xlargephoto, car_id, id) FROM stdin;
    cars_details          postgres    false    217       4816.dat �          0    16855    performance 
   TABLE DATA           j   COPY cars_details.performance (value1, detail1, value2, detail2, value3, detail3, car_id, id) FROM stdin;
    cars_details          postgres    false    218       4817.dat �          0    16860    specifications 
   TABLE DATA           ]   COPY cars_details.specifications (spec1, spec2, spec3, spec4, spec5, car_id, id) FROM stdin;
    cars_details          postgres    false    219       4818.dat �          0    16865    vehicles 
   TABLE DATA           W   COPY cars_details.vehicles (car_id, category, model, alt, price, overview) FROM stdin;
    cars_details          postgres    false    220       4819.dat �           0    0    features_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('cars_details.features_id_seq', 21, true);
          cars_details          postgres    false    221         �           0    0    images_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('cars_details.images_id_seq', 18, true);
          cars_details          postgres    false    223         �           0    0    performance_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('cars_details.performance_id_seq', 18, true);
          cars_details          postgres    false    224         �           0    0    specifications_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('cars_details.specifications_id_seq', 17, true);
          cars_details          postgres    false    222         3           2606    16895    features features_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY cars_details.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY cars_details.features DROP CONSTRAINT features_pkey;
       cars_details            postgres    false    216         5           2606    16915    images images_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY cars_details.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY cars_details.images DROP CONSTRAINT images_pkey;
       cars_details            postgres    false    217         7           2606    16925    performance performance_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY cars_details.performance
    ADD CONSTRAINT performance_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY cars_details.performance DROP CONSTRAINT performance_pkey;
       cars_details            postgres    false    218         9           2606    16905 "   specifications specifications_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY cars_details.specifications
    ADD CONSTRAINT specifications_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY cars_details.specifications DROP CONSTRAINT specifications_pkey;
       cars_details            postgres    false    219         ;           2606    16871    vehicles vehicles_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY cars_details.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (car_id);
 F   ALTER TABLE ONLY cars_details.vehicles DROP CONSTRAINT vehicles_pkey;
       cars_details            postgres    false    220         <           2606    16872    features features_car_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY cars_details.features
    ADD CONSTRAINT features_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;
 M   ALTER TABLE ONLY cars_details.features DROP CONSTRAINT features_car_id_fkey;
       cars_details          postgres    false    216    220    4667         =           2606    16877    images images_car_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY cars_details.images
    ADD CONSTRAINT images_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY cars_details.images DROP CONSTRAINT images_car_id_fkey;
       cars_details          postgres    false    217    4667    220         >           2606    16882 #   performance performance_car_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY cars_details.performance
    ADD CONSTRAINT performance_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;
 S   ALTER TABLE ONLY cars_details.performance DROP CONSTRAINT performance_car_id_fkey;
       cars_details          postgres    false    218    4667    220         ?           2606    16887 )   specifications specifications_car_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY cars_details.specifications
    ADD CONSTRAINT specifications_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;
 Y   ALTER TABLE ONLY cars_details.specifications DROP CONSTRAINT specifications_car_id_fkey;
       cars_details          postgres    false    4667    219    220                                                                                                                                                                                                                                     4815.dat                                                                                            0000600 0004000 0002000 00000004412 14646237362 0014271 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        5 Drive Modes	All Wheel Drive (AWD) Capability	Seats Up To Five	Practical Cargo Space	Automatic Braking with Pedestrian Detection	rogue	5
6,000 Lbs	7 Drive Modes	Intelligent 4x4	Hill Start Assist & Hill Descent Control	Seating For Up To Eight Passengers	pathfinder	6
Up to 1,500 lbs of towing capacity	3 Drive Modes	0-60 mph in 4.8s	Up to 304 miles of range	Fastest — 480-V Public DC Quick Charging	ariya	7
Electric Power Steering	Integrated Dynamics-control Module	Hill Start Assist	Automatic Brake Hold	Front Wheel Drive	kicks	8
Hill Start Assist	Intelligent AWD	1,500 lbs Maximum Towing Capacity	3 Drive Mode	Large, flat cargo area with 60/40-split rear seats	murano	9
Intelligent 4x4	Hill Start Assist	Active Brake Limited Slip	Seating For Up To 8	Intelligent Rear View Mirror	armada	10
Dynamic Driving	Intelligent AWD	Handling & stability while maintaining a smooth ride	Remote Engine Start System	Altima features ample trunk space	altima	11
Responsive Handling	Intelligent Engine Brake	Active Ride Control	Hill Start Assist	Responsive Transmission	sentra	12
5-speed Manual-Transmission	Hill Start Assist	Controlled and Responsive	Room For Up To 5	High Beam Assist	versa	13
Eco Mode	Instant torque	Fastest—480-V Public DC quick charging	Seating For Up To 5	Automatic Emergency Braking	nissan-leaf	14
Maxima Sport Mode	Intelligent Engine Brake	Active Ride Control	Drive-focused Suspension and Chassis	Continuously Variable Transmission	maxima	15
Boxed Ladder Frame	Off-road Tech	Hill Descent Control	Hill Start Assist	Maximum Payload Of Up To 1,620 lbs	frontier	16
2,360 lbs Maximum Payload	Active Brake Limited Slip	Hill Start Assist	Hill Descent Control	Off-road Capability	titan	17
6-speed Manual or 9-speed Automatic	Enhance Acceleration	Double-wishbone Front / Multi-link Rear	Powerful Braking With an Excellent Pedal Feel	Lightweight, Forged-alloy Wheels	nissan-z	18
Dual-clutch Transmission	AWD: Handling for all seasons	6-Speed Dual-clutch Transmission	3 Mode System for Dynamic Control	Advanced Design	gt-r	19
Eco Mode	Instant torque	Fastest—480-V Public DC quick charging	Seating For Up To 5	Automatic Emergency Braking	electric-leaf	20
Up to 1,500 lbs of towing capacity	3 Drive Modes	0-60 mph in 4.8s	Up to 304 miles of range	Fastest — 480-V Public DC Quick Charging	electric-ariya	21
\.


                                                                                                                                                                                                                                                      4816.dat                                                                                            0000600 0004000 0002000 00000007011 14646237362 0014270 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        /thumbnails/rogue-thumb.avif	/images/rogue.avif	/profilephotos/rogue-profile.avif	/smallphotos/rogue-sm.webp	/mediumphotos/rogue-md.webp	/bannerphotos/rogue-banner.webp	/xlargephotos/rogue-xl.webp	rogue	1
/thumbnails/pathfinder-thumb.jpg	/images/pathfinder.avif	/profilephotos/pathfinder-profile.jpg	/smallphotos/pathfinder-sm.webp	/mediumphotos/pathfinder-md.webp	/bannerphotos/pathfinder-banner.webp	/xlargephotos/pathfinder-xl.webp	pathfinder	3
/thumbnails/ariya-thumb.avif	/images/ariya.avif	/profilephotos/ariya-profile.jpg	/smallphotos/ariya-sm.webp	/mediumphotos/ariya-md.webp	/bannerphotos/ariya-banner.webp	/xlargephotos/ariya-xl.webp	ariya	4
/thumbnails/kicks-thumb.avif	/images/kicks.avif	/profilephotos/kicks-profile.avif	/smallphotos/kicks-sm.webp	/mediumphotos/kicks-md.webp	/bannerphotos/kicks-banner.webp	/xlargephotos/kicks-xl.webp	kicks	5
/thumbnails/murano-thumb.avif	/images/murano.webp	/profilephotos/murano-profile.webp	/smallphotos/murano-sm.webp	/mediumphotos/murano-md.webp	/bannerphotos/murano-banner.webp	/xlargephotos/murano-xl.webp	murano	6
thumbnails/armada-thumb.avif	/images/armada.avif	/profilephotos/armada-profile.avif	/smallphotos/armada-sm.webp	/mediumphotos/armada-md.webp	/bannerphotos/armada-banner.webp	/xlargephotos/armada-xl.webp	armada	7
/thumbnails/altima-thumb.avif	/images/altima.avif	/profilephotos/altima-profile.avif	/smallphotos/altima-sm.webp	/mediumphotos/altima-md.webp	/bannerphotos/altima-banner.webp	/xlargephotos/altima-xl.webp	altima	8
/thumbnails/sentra-thumb.avif	/images/sentra.avif	/profilephotos/sentra-profile.avif	/smallphotos/sentra-sm.webp	/mediumphotos/sentra-md.webp	/bannerphotos/sentra-banner.webp	/xlargephotos/sentra-xl.webp	sentra	9
/thumbnails/versa-thumb.avif	/images/versa.avif	/profilephotos/versa-profile.avif	/smallphotos/versa-sm.webp	/mediumphotos/versa-md.webp	/bannerphotos/versa-banner.webp	/xlargephotos/versa-xl.webp	versa	10
/thumbnails/leaf-thumb.avif	/images/leaf.avif	/profilephotos/leaf-profile.avif	/smallphotos/leaf-sm.webp	/mediumphotos/leaf-md.webp	/bannerphotos/leaf-banner.webp	/xlargephotos/leaf-xl.webp	nissan-leaf	11
/thumbnails/maxima-thumb.webp	/images/maxima.jpg	/profilephotos/maxima-profile.avif	/smallphotos/maxima-sm.webp	/mediumphotos/maxima-md.webp	/bannerphotos/maxima-banner.webp	/xlargephotos/maxima-xl.webp	maxima	12
/thumbnails/frontier-thumb.avif	/images/frontier.avif	/profilephotos/frontier-profile.avif	/smallphotos/frontier-sm.webp	/mediumphotos/frontier-md.webp	/bannerphotos/frontier-banner.webp	/xlargephotos/frontier-xl.webp	frontier	13
/thumbnails/titan-thumb.avif	/images/titan.avif	/profilephotos/titan-profile.avif	/smallphotos/titan-sm.webp	/mediumphotos/titan-md.jpg	/bannerphotos/titan-banner.webp	/xlargephotos/titan-xl.webp	titan	14
/thumbnails/nissan-z-thumb.avif	/images/nissan-z.avif	/profilephotos/nissan-z-profile.avif	/smallphotos/z-sm.webp	/mediumphotos/z-md.webp	/bannerphotos/z-banner.webp	/xlargephotos/z-xl.webp	nissan-z	15
/thumbnails/gt-r-thumb.avif	/images/gt-r.avif	/profilephotos/gt-r-profile.avif	/smallphotos/gt-r-sm.webp	/mediumphotos/gt-r-md.webp	/bannerphotos/gt-r-banner.webp	/xlargephotos/gt-r-xl.webp	gt-r	16
/thumbnails/leaf-thumb.avif	/images/leaf.avif	/profilephotos/leaf-profile.avif	/smallphotos/leaf-sm.webp	/mediumphotos/leaf-md.webp	/bannerphotos/leaf-banner.webp	/xlargephotos/leaf-xl.webp	electric-leaf	17
/thumbnails/ariya-thumb.avif	/images/ariya.avif	/profilephotos/ariya-profile.jpg	/smallphotos/ariya-sm.webp	/mediumphotos/ariya-md.webp	/bannerphotos/ariya-banner.webp	/xlargephotos/ariya-xl.webp	electric-ariya	18
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       4817.dat                                                                                            0000600 0004000 0002000 00000002540 14646237362 0014273 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        201	Horsepower with a VC-Turbo® Engine	29/36	Up to — MPG City/Highway	225	"lb-ft of Torque	rogue	1
284	Horsepower	6,000	Up to — Lbs. Maximum Towing	21/27	Up to — MPG City/Highway	pathfinder	2
304	Miles of Range — up to 304 miles	4.8	0-60 mph in 4.8 seconds	389	Horsepower	ariya	4
122	Horsepower	31/36	MPG City/Highway — up to	114	Lb-ft of Torque	kicks	5
260	Horsepower	20/28	MPG City/Highway — up to	240	Lb-ft of Torque	murano	6
V8	5.6-liter Engine	8500	Lbs. Max. Towing Capacity —  up to	400	Horsepower	armada	7
248	Horsepower	27/39	MPG City/Highway	273	Lb-ft of Torque	altima	8
149	Horsepower	30/40	MPG City/Highway	146	Lb-ft of Torque	sentra	9
122	Horsepower	32/40	EPA-estimated MPG	114	Lb-ft of Torque	versa	10
121	Up to- MPGe City	212	Up to- Miles	40	or available 60 kWh battery	nissan-leaf	11
20/30	MPG City/Highway	300	Horsepower	14.3 cu. ft.	Cargo Space	maxima	12
310	Horsepower	6,640	Lbs. Maximum Towing Capacity	281	Lb-ft of Torque	frontier	13
400	Horsepower 	11,050	Lbs. Maximum Towing Capacity	413	Lb-ft of Torque	titan	14
400	Horsepower	3.0	Liter Twin-turbo	6	Speed MT	nissan-z	15
565	Horsepower	6	Speed Dual-clutch Transmission	467	Lb-ft of Torque	gt-r	16
121	Up to- MPGe City	212	Up to- Miles	40	or available 60 kWh battery	electric-leaf	17
304	Miles of Range — up to 304 miles	4.8	0-60 mph in 4.8 seconds	389	Horsepower	electric-ariya	18
\.


                                                                                                                                                                4818.dat                                                                                            0000600 0004000 0002000 00000006517 14646237362 0014304 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        19' Unique aluminum-alloy wheels	Dual Panel Panoramic Moonroof	Quilted semi-aniline leather-appointed seats	Wireless Apple CarPlay® integration	ProPILOT Assist 1.1	rogue	1
Climate-controlled front seats and heated steering wheel	NissanConnect® with Navigation, Apple CarPlay, and wireless charging	13-speaker Bose Premium Audio System	Intelligent Around View® Monitor	Panoramic moonroof	pathfinder	2
Intelligent Around View® Monitor	Two USB-A ports, two USB-C ports and wireless charger	ProPILOT Assist 2.0 and ProPILOT Park	Panoramic Moonroof	Heated leather-wrapped steering wheel and climate-controlled seats	ariya	3
Intelligent Key with Remote Engine Start System	Intelligent Around View® Monitor	Safety Shield® 360	LED headlights with LED signature	Apple CarPlay® integration	kicks	4
Climate-controlled front seats and heated steering wheel	NissanConnect® with navigation featuring Apple CarPlay integration	Intelligent Around View® Monitor	Safety Shield® 360	Panoramic moonroof	murano	5
Quilted leather-appointed seats	13-speaker Bose Premium Audio System	Safety Shield® 360	Climate-controlled front seats (heated & cooled)	Moonroof	armada	6
Safety Shield® 360	Wireless Apple CarPlay® integration	Sport leather-appointed seats	Nine speaker Bose Premium Audio System	Moonroof	altima	7
Apple CarPlay® Integration	Safety Shield® 360	Optional Eight-speaker Bose Premium Audio System	Sport cloth seat trim	Intelligent Key with Remote Engine Start System	sentra	8
Automatic Temperature Control and heated front seats	Remote Engine Start System with Intelligent Climate Control	Automatic Emergency Braking with Pedestrian Detection	RearView Monitor	Apple CarPlay® integration	versa	9
High-output Quick Charge Port – 100 kW	160 kW AC synchronous electric motor	Nissan Door to Door Navigation with Premium Traffic	NissanConnect EV® with Services	ProPILOT Assist	nissan-leaf	10
Rain-sensing variable intermittent windshield wipers	Rear-window power sunshade	Electronic Brake force Distribution (EBD)	Vehicle Dynamic Control (VDC) with Traction Control System (TCS)	Traffic Sign Recognition	maxima	11
Automatic Emergency Braking with Pedestrian Detection	Optional Utili-track® Channel System and spray-on bedliner	Remote keyless entry	Premium cloth seat trim	NissanConnect® 8 touch-screen display	frontier	12
Independent double-wishbone front suspension	Automatic Emergency Braking with Pedestrian Detection	Nissan Intelligent Key® with Push Button Ignition	8-way power adjustable driver's seat	Nissan Door to Door Navigation with Premium Traffic	titan	13
420 hp NISMO®-tuned 3.0-liter twin-turbo V6	NISMO aerodynamic body design	NissanConnect® 9 touch-screen display with navigation	Wireless Apple CarPlay® integration	Eight speaker Bose Premium Audio System	nissan-z	14
600 hp NISMO®-tuned 3.8L twin-turbocharged V6	Nissan/Brembo® Carbon Ceramic Braking System	NISMO-tuned suspension	RECARO® leather-appointed seats	Apple CarPlay® integration	gt-r	15
High-output Quick Charge Port – 100 kW	160 kW AC synchronous electric motor	Nissan Door to Door Navigation with Premium Traffic	NissanConnect EV® with Services	ProPILOT Assist	electric-leaf	16
Intelligent Around View® Monitor	Two USB-A ports, two USB-C ports and wireless charger	ProPILOT Assist 2.0 and ProPILOT Park	Panoramic Moonroof	Heated leather-wrapped steering wheel and climate-controlled seats	electric-ariya	17
\.


                                                                                                                                                                                 4819.dat                                                                                            0000600 0004000 0002000 00000011241 14646237362 0014273 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        altima	Cars	Altima	Altima	26,370	The 2024 Nissan Altima has arrived. Allow it to accelerate your life with thrilling performance, a style that elevates, and contemporary technology that helps meet your needs. Now, grab the wheel, and let this midsize sedan propel you toward life’s greatest adventures.
ariya	Crossover & SUVs	Ariya	Ariya	39,590	The 2024 Nissan ARIYA is a thrilling, all-electric SUV. Fierce, yet refined. Elegant, yet exhilarating. It’s a totally new way to see electric driving. Experience the future of mobility, today!
armada	Crossover & SUVs	Armada	Armada	56,520	Imagine a hard-core, rugged 4x4 SUV that can seat up to eight in first-class luxury and style. This is Armada, and it will change what you expect from a full-size SUV. Tow bigger, explore farther, and feel more confident in the 2024 Armada.
electric-ariya	Electric Cars	Ariya	Ariya	39,590	The 2024 Nissan ARIYA is a thrilling, all-electric SUV. Fierce, yet refined. Elegant, yet exhilarating. It’s a totally new way to see electric driving. Experience the future of mobility, today!
electric-leaf	Electric Cars	Leaf	Nissan-Leaf	28,140	Potential Federal Tax Credit of up to $3,750 on a qualifying new 2024 Nissan LEAF purchase. It's a legend for a reason. Discover the instant acceleration, impressive range, and nimble handling of the all-electric 2024 Nissan LEAF.
frontier	Trucks	Frontier	Frontier	30,510	Plan your route, pack your bags, and prep your gear, because your true domain awaits. It’s time to go out and find it. Redefine your idea of a midsize pickup truck, and see how rock-solid Nissan capability can redefine your idea of freedom. This is the 2024 Nissan Frontier.
gt-r	Sports Cars	GT-R	GT-R	121,090	An unmatched blend of power and soul: the Nissan GT-R. Experience the singular supercar that sculpts the wind, with enhanced aerodynamics to improve ride and handling for 2024.
kicks	Crossover & SUVs	Kicks	Kicks	21,340	Cut through city streets with satisfying precision. Feel your playlist like never before with an available premium sound system. Connect in an instant with compatible smartphone integration. Style meets technology in the 2024 Nissan Kicks.
sentra	Cars	Sentra	Sentra	21,180	With available advanced technology, bold styling, agile performance, and a premium feel inside and out, the 2024 Nissan Sentra brings more to every drive.
maxima	Cars	Maxima	Maxima	38,340	This isn’t just the 4-Door Sports Car, it’s a high-tech powerhouse. At the touch of a button, it can change from a luxury sedan to a canyon carver. Feel confident with available advanced driver assist technologies, and for seamless connectivity, just plug in your compatible smartphone. All so you can focus on the thrill that comes on that next straightaway.
murano	Crossover & SUVs	Murano	Murano	38,740	Designed to thrill and ready to make a statement. Add in tech such as available Intelligent All-Wheel Drive and the connectivity of Apple CarPlay® integration, and the 2024 Murano is the luxury SUV that makes every commute a memorable one.
nissan-leaf	Cars	Leaf	Nissan-Leaf	28,140	Potential Federal Tax Credit of up to $3,750 on a qualifying new 2024 Nissan LEAF purchase. It's a legend for a reason. Discover the instant acceleration, impressive range, and nimble handling of the all-electric 2024 Nissan LEAF.
nissan-z	Sports Cars	Nissan Z	Nissan Z	42,970	A powerful, twin-turbo V6 up front, a manual transmission in the middle, and the ideal balance of rear-wheel drive in the back. All this is wrapped in a stunning body with a cockpit that’s focused on the drive.
pathfinder	Crossover & SUVs	Pathfinder	Pathfinder	36,650	When adventure calls, answer with the 2024 Nissan Pathfinder. Whether it’s the thrill of new experiences or new destinations — or both — this mid-size SUV comes ready to play with room for up to 8 passengers, an expansive cargo capacity, and advanced available 4x4 capability.
rogue	Crossover & SUVs	Rogue	Rogue	28,850	The 2024 Rogue is a mid-size crossover with a big appetite for adventure. There’s a bold new look, updated tech, plus loads of room for cargo and friends. And with great mileage and available Intelligent AWD, Rogue is the answer: from your daily commute to your next road trip.
titan	Trucks	TITAN	TITAN	46,690	TITAN and TITAN XD® boast so many ways to get the job done. Flex your muscles, command attention, and tackle jobs and projects in this fearless full-size pickup truck. TITAN’s mission? To help you accomplish yours.
versa	Cars	Versa	Versa	16,680	The impressive-handling Versa dares you to reach higher. This subcompact car offers 3 trims with a starting MSRP under $20,000, striking looks, wallet-friendly EPA-estimated mpg numbers, and an astounding selection of available driver assist features.
\.


                                                                                                                                                                                                                                                                                                                                                               restore.sql                                                                                         0000600 0004000 0002000 00000024724 14646237362 0015412 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE nissan_experience;
--
-- Name: nissan_experience; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE nissan_experience WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


ALTER DATABASE nissan_experience OWNER TO postgres;

\connect nissan_experience

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: cars_details; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA cars_details;


ALTER SCHEMA cars_details OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: features; Type: TABLE; Schema: cars_details; Owner: postgres
--

CREATE TABLE cars_details.features (
    feat1 text NOT NULL,
    feat2 text NOT NULL,
    feat3 text NOT NULL,
    feat4 text NOT NULL,
    feat5 text NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE cars_details.features OWNER TO postgres;

--
-- Name: features_id_seq; Type: SEQUENCE; Schema: cars_details; Owner: postgres
--

CREATE SEQUENCE cars_details.features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE cars_details.features_id_seq OWNER TO postgres;

--
-- Name: features_id_seq; Type: SEQUENCE OWNED BY; Schema: cars_details; Owner: postgres
--

ALTER SEQUENCE cars_details.features_id_seq OWNED BY cars_details.features.id;


--
-- Name: images; Type: TABLE; Schema: cars_details; Owner: postgres
--

CREATE TABLE cars_details.images (
    thumbnail character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    profilephoto character varying(255) NOT NULL,
    smallphoto character varying(255) NOT NULL,
    mediumphoto character varying(255) NOT NULL,
    bannerphoto character varying(255) NOT NULL,
    xlargephoto character varying(255) NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE cars_details.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: cars_details; Owner: postgres
--

CREATE SEQUENCE cars_details.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE cars_details.images_id_seq OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: cars_details; Owner: postgres
--

ALTER SEQUENCE cars_details.images_id_seq OWNED BY cars_details.images.id;


--
-- Name: performance; Type: TABLE; Schema: cars_details; Owner: postgres
--

CREATE TABLE cars_details.performance (
    value1 text NOT NULL,
    detail1 text NOT NULL,
    value2 text NOT NULL,
    detail2 text NOT NULL,
    value3 text NOT NULL,
    detail3 text NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE cars_details.performance OWNER TO postgres;

--
-- Name: performance_id_seq; Type: SEQUENCE; Schema: cars_details; Owner: postgres
--

CREATE SEQUENCE cars_details.performance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE cars_details.performance_id_seq OWNER TO postgres;

--
-- Name: performance_id_seq; Type: SEQUENCE OWNED BY; Schema: cars_details; Owner: postgres
--

ALTER SEQUENCE cars_details.performance_id_seq OWNED BY cars_details.performance.id;


--
-- Name: specifications; Type: TABLE; Schema: cars_details; Owner: postgres
--

CREATE TABLE cars_details.specifications (
    spec1 text NOT NULL,
    spec2 text NOT NULL,
    spec3 text NOT NULL,
    spec4 text NOT NULL,
    spec5 text NOT NULL,
    car_id character varying(20) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE cars_details.specifications OWNER TO postgres;

--
-- Name: specifications_id_seq; Type: SEQUENCE; Schema: cars_details; Owner: postgres
--

CREATE SEQUENCE cars_details.specifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE cars_details.specifications_id_seq OWNER TO postgres;

--
-- Name: specifications_id_seq; Type: SEQUENCE OWNED BY; Schema: cars_details; Owner: postgres
--

ALTER SEQUENCE cars_details.specifications_id_seq OWNED BY cars_details.specifications.id;


--
-- Name: vehicles; Type: TABLE; Schema: cars_details; Owner: postgres
--

CREATE TABLE cars_details.vehicles (
    car_id character varying(20) NOT NULL,
    category character varying(20) NOT NULL,
    model character varying(20) NOT NULL,
    alt character varying(20) NOT NULL,
    price text NOT NULL,
    overview text NOT NULL
);


ALTER TABLE cars_details.vehicles OWNER TO postgres;

--
-- Name: features id; Type: DEFAULT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.features ALTER COLUMN id SET DEFAULT nextval('cars_details.features_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.images ALTER COLUMN id SET DEFAULT nextval('cars_details.images_id_seq'::regclass);


--
-- Name: performance id; Type: DEFAULT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.performance ALTER COLUMN id SET DEFAULT nextval('cars_details.performance_id_seq'::regclass);


--
-- Name: specifications id; Type: DEFAULT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.specifications ALTER COLUMN id SET DEFAULT nextval('cars_details.specifications_id_seq'::regclass);


--
-- Data for Name: features; Type: TABLE DATA; Schema: cars_details; Owner: postgres
--

COPY cars_details.features (feat1, feat2, feat3, feat4, feat5, car_id, id) FROM stdin;
\.
COPY cars_details.features (feat1, feat2, feat3, feat4, feat5, car_id, id) FROM '$$PATH$$/4815.dat';

--
-- Data for Name: images; Type: TABLE DATA; Schema: cars_details; Owner: postgres
--

COPY cars_details.images (thumbnail, image, profilephoto, smallphoto, mediumphoto, bannerphoto, xlargephoto, car_id, id) FROM stdin;
\.
COPY cars_details.images (thumbnail, image, profilephoto, smallphoto, mediumphoto, bannerphoto, xlargephoto, car_id, id) FROM '$$PATH$$/4816.dat';

--
-- Data for Name: performance; Type: TABLE DATA; Schema: cars_details; Owner: postgres
--

COPY cars_details.performance (value1, detail1, value2, detail2, value3, detail3, car_id, id) FROM stdin;
\.
COPY cars_details.performance (value1, detail1, value2, detail2, value3, detail3, car_id, id) FROM '$$PATH$$/4817.dat';

--
-- Data for Name: specifications; Type: TABLE DATA; Schema: cars_details; Owner: postgres
--

COPY cars_details.specifications (spec1, spec2, spec3, spec4, spec5, car_id, id) FROM stdin;
\.
COPY cars_details.specifications (spec1, spec2, spec3, spec4, spec5, car_id, id) FROM '$$PATH$$/4818.dat';

--
-- Data for Name: vehicles; Type: TABLE DATA; Schema: cars_details; Owner: postgres
--

COPY cars_details.vehicles (car_id, category, model, alt, price, overview) FROM stdin;
\.
COPY cars_details.vehicles (car_id, category, model, alt, price, overview) FROM '$$PATH$$/4819.dat';

--
-- Name: features_id_seq; Type: SEQUENCE SET; Schema: cars_details; Owner: postgres
--

SELECT pg_catalog.setval('cars_details.features_id_seq', 21, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: cars_details; Owner: postgres
--

SELECT pg_catalog.setval('cars_details.images_id_seq', 18, true);


--
-- Name: performance_id_seq; Type: SEQUENCE SET; Schema: cars_details; Owner: postgres
--

SELECT pg_catalog.setval('cars_details.performance_id_seq', 18, true);


--
-- Name: specifications_id_seq; Type: SEQUENCE SET; Schema: cars_details; Owner: postgres
--

SELECT pg_catalog.setval('cars_details.specifications_id_seq', 17, true);


--
-- Name: features features_pkey; Type: CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: performance performance_pkey; Type: CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.performance
    ADD CONSTRAINT performance_pkey PRIMARY KEY (id);


--
-- Name: specifications specifications_pkey; Type: CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.specifications
    ADD CONSTRAINT specifications_pkey PRIMARY KEY (id);


--
-- Name: vehicles vehicles_pkey; Type: CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (car_id);


--
-- Name: features features_car_id_fkey; Type: FK CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.features
    ADD CONSTRAINT features_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;


--
-- Name: images images_car_id_fkey; Type: FK CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.images
    ADD CONSTRAINT images_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;


--
-- Name: performance performance_car_id_fkey; Type: FK CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.performance
    ADD CONSTRAINT performance_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;


--
-- Name: specifications specifications_car_id_fkey; Type: FK CONSTRAINT; Schema: cars_details; Owner: postgres
--

ALTER TABLE ONLY cars_details.specifications
    ADD CONSTRAINT specifications_car_id_fkey FOREIGN KEY (car_id) REFERENCES cars_details.vehicles(car_id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            