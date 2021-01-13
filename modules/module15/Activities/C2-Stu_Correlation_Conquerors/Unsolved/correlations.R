# Import the ggplot2 library
library(ggplot2)

wine.url <- "https://archive.ics.uci.edu/ml/machine-learning-databases/wine/wine.data"
wine <- read.csv(wine.url)

colnames(wine) <- c('Type', 'Alcohol', 'Malic', 'Ash', 
                    'Alcalinity', 'Magnesium', 'Phenols', 
                    'Flavanoids', 'Nonflavanoids',
                    'Proanthocyanins', 'Color', 'Hue', 
                    'Dilution', 'Proline')
wine$type = factor(wine$Type)