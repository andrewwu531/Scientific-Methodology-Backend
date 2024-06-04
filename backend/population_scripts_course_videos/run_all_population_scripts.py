# run_all_population_scripts.py

import os
import sys

# # Ensure the scripts can be found in the import path
# sys.path.append(os.path.abspath(os.path.join(__file__, os.pardir, 'all_population_scripts')))

from populate_muscle_building import populate_course_muscle_building
from populate_weight_loss import  populate_course_weight_loss
from populate_uni import populate_course_uni
from populate_uni_pp import populate_course_uni_pp
from populate_english_pronunciation import populate_course_english_pronunciation
from populate_topic_essays import populate_course_topic_essays
from populate_accents import populate_course_accents
from populate_business_english import populate_course_business_english
from populate_storytelling import populate_course_storytelling
from populate_comedy_writing import populate_course_comedy_writing

if __name__ == '__main__':
    populate_course_muscle_building()
    populate_course_weight_loss()
    populate_course_uni()
    populate_course_uni_pp()
    populate_course_english_pronunciation()
    populate_course_topic_essays()
    populate_course_accents()
    populate_course_business_english()
    populate_course_storytelling()
    populate_course_comedy_writing()