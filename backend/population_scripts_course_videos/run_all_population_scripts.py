# run_all_population_scripts.py

import os
import sys

# # Ensure the scripts can be found in the import path
# sys.path.append(os.path.abspath(os.path.join(__file__, os.pardir, 'all_population_scripts')))

from populate_muscle_building import populate_course_muscle_building
from populate_weight_loss import  populate_course_weight_loss

if __name__ == '__main__':
    populate_course_muscle_building()
    populate_course_weight_loss()
