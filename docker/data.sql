-- -----------------------------------------------------
-- Schema full-stack-sports-center
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `sports-center`;

USE `sports-center` ;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS Brand;
DROP TABLE IF EXISTS Type;
DROP TABLE IF EXISTS Product;

-- Create the Brand table
CREATE TABLE `Brand` (
                         `Id` INT AUTO_INCREMENT PRIMARY KEY,
                         `Name` VARCHAR(255) NOT NULL
);

-- Insert data into the Brand table
INSERT INTO Brand (Name) VALUES
                             ('Adidas'),
                             ('ASICS'),
                             ('Victor'),
                             ('Yonex'),
                             ('Puma'),
                             ('Nike'),
                             ('Babolat');

-- Create the Type table
CREATE TABLE `Type` (
                        `Id` INT AUTO_INCREMENT PRIMARY KEY,
                        `Name` VARCHAR(255) NOT NULL
);

-- Insert data into the Type table
INSERT INTO Type (Name) VALUES
                            ('Shoes'),
                            ('Rackets'),
                            ('Football'),
                            ('Kit Bags');

-- Create the Product table
CREATE TABLE `Product` (
                           `Id` INT AUTO_INCREMENT PRIMARY KEY,
                           `Name` VARCHAR(255) NOT NULL,
                           `Description` TEXT,
                           `Price` DECIMAL(10, 2) NOT NULL,
                           `PictureUrl` VARCHAR(255),
                           `ProductTypeId` INT NOT NULL,
                           `ProductBrandId` INT NOT NULL,
                           FOREIGN KEY (`ProductTypeId`) REFERENCES `Type`(`Id`),
                           FOREIGN KEY (`ProductBrandId`) REFERENCES `Brand`(`Id`)
);

-- Insert data into the Product table
INSERT INTO Product (Name, Description, Price, PictureUrl, ProductTypeId, ProductBrandId) VALUES
                                                                                              ('Adidas Quick Force Indoor Badminton Shoes', 'Designed for professional as well as amateur badminton players. These indoor shoes are crafted with synthetic upper that provides natural fit, while the EVA midsole provides lightweight cushioning. The shoes can be used for Badminton and Squash', 3500, 'images/Product/adidas_shoe-1.png', 1, 1),
                                                                                              ('Adidas Quick Force Indoor Badminton Shoes', 'Designed for professional as well as amateur badminton players. These indoor shoes are crafted with synthetic upper that provides natural fit, while the EVA midsole provides lightweight cushioning. The shoes can be used for Badminton and Squash', 3375, 'images/Product/adidas_shoe-2.png', 1, 1),
                                                                                              ('Adidas Quick Force Indoor Badminton Shoes', 'Designed for professional as well as amateur badminton players. These indoor shoes are crafted with synthetic upper that provides natural fit, while the EVA midsole provides lightweight cushioning. The shoes can be used for Badminton and Squash', 3375, 'images/Product/adidas_shoe-3.png', 1, 1),
                                                                                              ('Asics Gel Rocket 8 Indoor Court Shoes', 'The Asics Gel Rocket 8 Indoor Court Shoes (Orange/Silver) will keep you motivated and fired up to perform at your peak in volleyball, squash and other indoor sports. Beginner and intermediate players get cutting-edge technologies at an affordable price point. This entry level all-rounder has a durable upper and offers plenty of stability.', 4249, 'images/Product/asics_shoe-1.png', 1, 2),
                                                                                              ('Asics Gel Rocket 8 Indoor Court Shoes', 'The Asics Gel Rocket 8 Indoor Court Shoes (Orange/Silver) will keep you motivated and fired up to perform at your peak in volleyball, squash and other indoor sports. Beginner and intermediate players get cutting-edge technologies at an affordable price point. This entry level all-rounder has a durable upper and offers plenty of stability.', 3499, 'images/Product/asics_shoe-2.png', 1, 2),
                                                                                              ('Asics Gel Rocket 8 Indoor Court Shoes', 'The Asics Gel Rocket 8 Indoor Court Shoes (Orange/Silver) will keep you motivated and fired up to perform at your peak in volleyball, squash and other indoor sports. Beginner and intermediate players get cutting-edge technologies at an affordable price point. This entry level all-rounder has a durable upper and offers plenty of stability.', 3499, 'images/Product/asics_shoe-3.png', 1, 2),
                                                                                              ('Victor SHW503 F Badminton Shoes', 'PU Leather, Mesh, EVA, ENERGY MAX, Nylon sheet, Rubber', 2392, 'images/Product/victor_shoe-1.png', 1, 3),
                                                                                              ('Victor SHW503 F Badminton Shoes', 'PU Leather, Mesh, EVA, ENERGY MAX, Nylon sheet, Rubber', 3000, 'images/Product/victor_shoe-2.png', 1, 3),
                                                                                              ('YONEX Super Ace Light Badminton Shoes', 'Rule the game with Super Ace Light highlights Maximum shock absorption Quick compression recovery Its high resilience ensures YONEX insoles retain their shape longer Meticulously contoured for comfort Provides stability in the forefoot and toe areas technology.', 2590, 'images/Product/yonex_shoe-1.png', 1, 4),
                                                                                              ('YONEX Super Ace Light Badminton Shoes', 'Rule the game with Super Ace Light highlights Maximum shock absorption Quick compression recovery Its high resilience ensures YONEX insoles retain their shape longer Meticulously contoured for comfort Provides stability in the forefoot and toe areas technology.', 3500, 'images/Product/yonex_shoe-2.png', 1, 4),
                                                                                              ('YONEX Super Ace Light Badminton Shoes', 'Rule the game with Super Ace Light highlights Maximum shock absorption Quick compression recovery Its high resilience ensures YONEX insoles retain their shape longer Meticulously contoured for comfort Provides stability in the forefoot and toe areas technology.', 3700, 'images/Product/yonex_shoe-3.png', 1, 4),
                                                                                              ('Puma 19 FH Rubber Spike Cricket Shoes', 'With features and functions designed to withstand long hours out on the pitch, these one8 19 FH Rubber shoes have been engineered to offer comfort to cricketers', 4999, 'images/Product/puma_shoe-1.png', 1, 5),
                                                                                              ('Puma 19 FH Rubber Spike Cricket Shoes', 'With features and functions designed to withstand long hours out on the pitch, these one8 19 FH Rubber shoes have been engineered to offer comfort to cricketers.', 5200, 'images/Product/puma_shoe-2.png', 1, 5),
                                                                                              ('Puma 19 FH Rubber Spike Cricket Shoes', 'With features and functions designed to withstand long hours out on the pitch, these one8 19 FH Rubber shoes have been engineered to offer comfort to cricketers.', 5700, 'images/Product/puma_shoe-3.png', 1, 5),
                                                                                              ('Babolat Shadow Spirit Mens Badminton Shoes (Cloisonne/Strike)', 'Babolat Shadow Spirit Mens Badminton Shoes (Cloisonne/Strike)', 4125, 'images/Product/babolat_shoe-1.png', 1, 7),
                                                                                              ('Babolat Shadow Tour Mens Badminton Shoes (White/Blue)', 'Babolat Shadow Tour Mens Badminton Shoes (White/Blue)', 5249, 'images/Product/babolat_shoe-2.png', 1, 7),
                                                                                              ('Babolat Shadow Team Womens Badminton Shoes (Black/Peony)', 'Babolat Shadow Team Womens Badminton Shoes (Black/Peony)', 2999, 'images/Product/babolat_shoe-3.png', 1, 7),
                                                                                              ('Yonex VCORE Pro 100 A Tennis Racquet (270gm, Strung)', 'For offensive players looking to win with game-changing spin and power.', 6099, 'images/Product/yonex-racket-1.png', 2, 4),
                                                                                              ('Yonex VCORE Pro 100 A Tennis Racquet (290gm, Strung)', 'For offensive players looking to win with game-changing spin and power.', 6399, 'images/Product/yonex-racket-2.png', 2, 4),
                                                                                              ('Yonex VCORE Pro 100 2019 Tennis Racquet (280gm, Unstrung)', 'For offensive players looking to win with game-changing spin and power.', 13299, 'images/Product/yonex-racket-3.png', 2, 4),
                                                                                              ('Babolat Boost D Tennis Racquet (260gm, Strung)', 'Babolat Boost D Tennis Racquet (260gm, Strung)', 6999, 'images/Product/babolat-racket-1.png', 2, 7),
                                                                                              ('Buy Babolat Pure Aero 2019 Superlite Tennis Racquet (Unstrung, 255gm) and get Free Stringing with Babolat RPM Blast String!!', 'Babolat Pure Aero 2019 Superlite Tennis Racquet (Unstrung, 255gm)', 13000, 'images/Product/babolat-racket-2.png', 2, 7),
                                                                                              ('Babolat Pure Drive VS Tennis Racquet (Pair, 300gm, Strung)', 'Babolat Pure Drive VS Tennis Racquet (Pair, 300gm, Strung)', 34000, 'images/Product/babolat-racket-3.png', 2, 7),
                                                                                              ('Adidas FIFA World Cup 2018 OMB Football (White/Red/Black)', 'Featuring an innovative surface panel design, this is the match ball used during football''s FIFA World Cup™. Inspired by Russia''s urban landscapes, a pixelated graphic pays tribute to the iconic Telstar ball. Its thermally bonded seamless surface designs.', 2499, 'images/Product/adidas_football-1.png', 3, 1),
                                                                                              ('Adidas FIFA World Cup 2018 OMB Football', 'Featuring an innovative surface panel design, this is the match ball used during football''s FIFA World Cup™. Inspired by Russia''s urban landscapes, a pixelated graphic pays tribute to the iconic Telstar ball. Its thermally bonded seamless surface designs.', 3200, 'images/Product/adidas_football-2.png', 3, 1),
                                                                                              ('Adidas FIFA World Cup Top Glider Ball', 'Featuring an innovative surface panel design, this is the match ball used during football''s FIFA World Cup™. Inspired by Russia''s urban landscapes, a pixelated graphic pays tribute to the iconic Telstar ball. Its thermally bonded seamless surface designs.', 2499, 'images/Product/adidas_football-3.png', 3, 1),
                                                                                              ('Nike Pitch Premier League Football (Yellow/Purple)', 'Nike Pitch Premier League Football (Yellow/Purple) Ball is made with colorful graphics that stand out on the field for easier ball tracking. A machine-stitched TPU casing delivers great touch and durability during play.', 1525, 'images/Product/Nike-Football-1.png', 3, 6),
                                                                                              ('Nike Manchester City Supporters Football (Berry)', 'Nike Manchester City Supporters Football (Berry) Ball is made with colorful graphics that stand out on the field for easier ball tracking. A machine-stitched TPU casing delivers great touch and durability during play.', 1525, 'images/Product/Nike-Football-2.png', 3, 6),
                                                                                              ('Nike Mercurial Veer Football (White/Green/Black)', 'Nike Mercurial Veer Football (White/Green/Black) Ball is made with colorful graphics that stand out on the field for easier ball tracking. A machine-stitched TPU casing delivers great touch and durability during play.', 1450, 'images/Product/Nike-Football-3.png', 3, 6),
                                                                                              ('Babolat Team Line Racket 12 Kit Bag (Fluorescent Red)', 'The Babolat Team Line racquet bag is highly durable and fashionable, holding up to 12 racquets.', 4550, 'images/Product/babolat-kitback-1.png', 4, 7),
                                                                                              ('Babolat Pure Strike RH X12 Kit Bag (White/Red)', 'Babolat Pure Strike 12-Pack Bag will effortlessly hold the majority of the rigging you should be fruitful on the court', 9799, 'images/Product/babolat-kitback-2.png', 4, 7),
                                                                                              ('Babolat Team Line 12 Racquet Kit Bag (Silver)', 'Babolat Team Line 12 Racquet Kit Bag (Silver) for players who have tennis in their blood, Babolat brings you the Babolat Tennis Kit Bag India - Babolat Team Line Red 12 Pack.', 4550, 'images/Product/babolat-kitback-3.png', 4, 7),
                                                                                              ('Yonex SUNR 4826TK BT6-SR Badminton Kit Bag (Black/Red/White)', 'Yonex SUNR 4826TK BT6-SR Badminton Kit Bag (Black/Red/White)', 1999, 'images/Product/yonex-kitback-1.png', 4, 4),
                                                                                              ('Yonex SUNR LRB05 MS BT6 S Badminton Kit Bag (Blue/Red)', 'Yonex SUNR LRB05 MS BT6 S Badminton Kit Bag (Blue/Red)', 1499, 'images/Product/yonex-kitback-2.png', 4, 4),
                                                                                              ('Yonex SUNR LRB05 MS BT6 S Badminton Kit Bag (Grey/Orange)', 'Yonex SUNR LRB05 MS BT6 S Badminton Kit Bag (Grey/Orange)', 1499, 'images/Product/yonex-kitback-3.png', 4, 4);
